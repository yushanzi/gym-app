#!/usr/bin/env python3
"""生成 PWA 图标：绿色底 + 白色杠铃（纯标准库，无依赖）。用法: python3 gen_icons.py"""
import os, struct, zlib

HERE = os.path.dirname(os.path.abspath(__file__))
OUT = os.path.join(HERE, 'icons')

BG = (52, 199, 89)   # iOS 绿
FG = (255, 255, 255)

def px(x, y, s):
    """返回 (r, g, b)——背景铺满全图，iOS 会自己裁圆角"""
    cy = s / 2.0
    bh = s * 0.09                          # 杠铃杆高度
    if abs(y - cy) <= bh / 2 and s * 0.16 <= x <= s * 0.84:
        return FG
    ph, pw = s * 0.28, s * 0.13            # 铃片高/宽
    for cx in (s * 0.20, s * 0.80):
        if cx - pw / 2 <= x <= cx + pw / 2 and cy - ph / 2 <= y <= cy + ph / 2:
            return FG
    return BG

def png(size, path):
    ss = 2  # 2x 超采样抗锯齿
    rows = []
    for y in range(size):
        row = b'\x00'
        for x in range(size):
            r = g = b = 0
            for dy in range(ss):
                for dx in range(ss):
                    p = px((x * ss + dx + 0.5) / ss, (y * ss + dy + 0.5) / ss, size)
                    r += p[0]; g += p[1]; b += p[2]
            n = ss * ss
            row += bytes((r // n, g // n, b // n, 255))
        rows.append(row)
    raw = b''.join(rows)

    def chunk(t, d):
        c = t + d
        return struct.pack('>I', len(d)) + c + struct.pack('>I', zlib.crc32(c) & 0xffffffff)

    ihdr = struct.pack('>IIBBBBB', size, size, 8, 6, 0, 0, 0)
    data = (b'\x89PNG\r\n\x1a\n' + chunk(b'IHDR', ihdr)
            + chunk(b'IDAT', zlib.compress(raw, 9)) + chunk(b'IEND', b''))
    with open(path, 'wb') as f:
        f.write(data)
    print(f'  {os.path.basename(path)} ({size}x{size})')

if __name__ == '__main__':
    os.makedirs(OUT, exist_ok=True)
    for s in (512, 192, 180):
        png(s, os.path.join(OUT, f'icon-{s}.png'))
    print('图标生成完毕 ->', OUT)
