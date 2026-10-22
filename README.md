# Icon-Labeled Pricing Table

A responsive pricing table built with semantic HTML and modern CSS, featuring inline SVG icons, zebra striping, a sticky header, and fluid width using `clamp()`.

## Features

- **Semantic table structure** – built with a real `<table>`, `<thead>`, and `<tbody>`, not divs
- **Inline SVG icons** – checkmark icons styled entirely with CSS (no inline `fill` attributes), with a hover effect
- **Advanced selectors** – `tr:nth-child(even)` for zebra striping and `tr: hover` for row highlighting
- **Fluid width** – `clamp()` keeps the table readable on narrow screens without stretching too wide on large ones
- **Sticky header** – the header row stays visible while scrolling using `position: sticky`

## Built With

- HTML5
- CSS3

## Getting Started

1. Clone the repository
```bash
   git clone https://github.com/MANISHIMWESalton/sixcode-week-1/new/main
```
2. Open the project folder
```bash
   cd min-project
```
3. Open `index.html` in your browser

## How to Test

- **Hover** over a row or icon to see the hover styles
- **Resize** the browser window to see the table width adjust with `clamp()`
- **Scroll** the table to see the sticky header stay in place
