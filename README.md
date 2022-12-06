# Gradient Generator 🟥->🟦
![Gradient Generator Logo Art](https://lh3.googleusercontent.com/drive-viewer/AFDK6gMdrLKUXUZO_g4-Jk3Hct0fq6-2y10QcsSNMNPiXVHk5xtuWn7PAifIeO38cHkD2MLtUWA3dU6vj0FDkL7dmrw2ut4l9g=w1366-h665)

A [p5.js](https://p5js.org/) project that creates linear gradients by setting individual pixels.

# Features 💡

- Linear gradient generation.
- Multiple colours.
- **To-Do:** Add support for cyclical gradients.


# Demo 🗂

[![Image of gradient and code](https://lh3.googleusercontent.com/drive-viewer/AJc5JmQtiQPU8_S8Sb_BjqjTdCQGKHfyXtoSiogv-Q5ggR8EY50XOc214b1ZPLOClGNhCICSHBuZ7es=w1366-h665 "p5.js project")](https://editor.p5js.org/21jack.pike/sketches/W7AOevNsr)
(Click image for link to project).

# Write-up ✏

Colour theory is a very complicated topic with many niche subcategories that tie in with other subjects like maths and sometimes even physics. In this essay I will be writing about the uses, applications and types of colour gradients.

## Types of Gradient ⚙
There are multiple types of gradient. Some examples are:
- Two-dimensional gradients.
- Linear gradients.
- Non-linear gradients.
- Radial gradients.
- Conic gradients.
- Three-dimensional gradients.

## Two-Step Gradients 
Simply put, two-step gradients are the most rudimentary form of a colour gradient. They are a form of linear gradient that transforms one specific colour into another in a linear fashion using a mathematical transformation technique known as linear interpolation.

## Linear Gradients 
A linear gradient is any gradient that uses the transformation method which is linear interpolation to calculate the colour that should be assigned to a certain pixel. Some other colour interpolation methods include hue interpolation, luminosity interpolation and quadratic interpolation.

## Non-Linear Gradients
A non-linear gradient is a gradient that does not interpolate the colours in a linear fashion. For example, if a gradient was generated using cubic or bi-cubic interpolation it would change the positions of the colour and not the colour itself.

## Radial Gradients
Radial gradients are similar to linear gradients in the sense that they progess through colours in a linear fashion however, radial gradients are mapped to polar coordinates instead of linear coordinates. This creates a gradient that originates from the centre and expands outwards.

## Conic Gradients
A conic gradient is similar to a radial gradient in the sense that you have to iterate over theta instead and there's a little bit of cleanup necessary to normalise it. When you take the Math.atan2, you get a value between -π an π radians which you can then use to sweep around the centre and clash at a pre-determined point.

## Three-Dimensional Gradients
Similar to a two-step gradient, a 3D gradient is one that linearly cycles through the colours but instead of being represented in a 2D plane, the gradient is rendered in 3 dimensions.
