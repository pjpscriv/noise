# Static

### 1. <span>s

```javascript
for (var i=0; i<number_of_pixels; i++) {
    var bg = `"background-color: #${Math.random().toString(16).slice(-6)};"`;
    spans += `<span style=${bg}></span>`;
}
```

- Can't do one by one
- Very slow

### 2. Canvas

```javascript
for (var y=0; y < h; y += pixel_size) {
    for (var x=0; x < w; x += pixel_size) {
        canvas.fillStyle = '#' + Math.random().toString(16).slice(-6);
        canvas.fillRect(x, y, pixel_size, pixel_size);
    }
}
```

- Can "scan" down the screen
- Faster
- Still slow when pixels small

### 2.5 Canvas Scanning

- Take the scan part of section 2?
- Multi-click fun

### 3. Randomness

```javascript
for (i=0; i<step_size && i<unfilled.length; i++) {
    var index = Math.floor(Math.random() * unfilled.length);
    var x = unfilled[index][0];
    var y = unfilled[index][1];
    ctx.fillStyle = `#${Math.random().toString(16).slice(-6)}`;
    ctx.fillRect(x, y, pixel_size, pixel_size);
    unfilled.splice(index, 1);
}
```

- Can fill up screen perfectly
- **Very** slow when the pixels are small
- Multi-click still super broken

### 4. "Best"

```javascript
for (k=0; k<step; k++) {
    j = Math.floor(Math.random() * h);
    i = Math.floor(Math.random() * w);
    c = '#' + Math.random().toString(16).slice(-6);
    ctx.fillStyle = c;
    ctx.fillRect(i, j, pixel, pixel);
}
```

- 🕺🥳🎊🎉🎈 **Disco Disco!** 🕺🥳🎊🎉🎈

### 5 Build

- Fun

### 6 Spin

- Fun fun fun
- ...but
- It's still slow!

### 5. Shaders

- 



