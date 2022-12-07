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

### Two-Step Gradients 
Simply put, two-step gradients are the most rudimentary form of a colour gradient. They are a form of linear gradient that transforms one specific colour into another in a linear fashion using a mathematical transformation technique known as linear interpolation.

### Linear Gradients 
A linear gradient is any gradient that uses the transformation method which is linear interpolation to calculate the colour that should be assigned to a certain pixel. Some other colour interpolation methods include hue interpolation, luminosity interpolation and quadratic interpolation.

### Non-Linear Gradients
A non-linear gradient is a gradient that does not interpolate the colours in a linear fashion. For example, if a gradient was generated using cubic or bi-cubic interpolation it would change the positions of the colour and not the colour itself.

### Radial Gradients
Radial gradients are similar to linear gradients in the sense that they progess through colours in a linear fashion however, radial gradients are mapped to polar coordinates instead of linear coordinates. This creates a gradient that originates from the centre and expands outwards.

### Conic Gradients
A conic gradient is similar to a radial gradient in the sense that you have to iterate over theta instead and there's a little bit of cleanup necessary to normalise it. When you take the Math.atan2, you get a value between -π an π radians which you can then use to sweep around the centre and clash at a pre-determined point.

### Three-Dimensional Gradients
Similar to a two-step gradient, a 3D gradient is one that linearly cycles through the colours but instead of being represented in a 2D plane, the gradient is rendered in 3 dimensions.

## The Code 🧑‍💻
The first line initialises the variables we will be using in the program in the global scope.

![Code Segment 1](https://lh3.googleusercontent.com/u/0/drive-viewer/AFDK6gOzO7zWe1-SJOV98lMv63-loc7xp8EaOVxnNvh4PeYFuBJ72AGM6-GmslXDO8hnF8cPyNfESLcRvGy8PaxnyTt0MtkiPw=w450)

A function is then declared to take an input of a 2-dimensional array containing each colour value. A seperate and empty 2D array is then created to contain the new, normalised values. This is done by using an ellipses from the JS rest syntax and mapping each element to an empty string. Then we use nested iteration to loop through each element of the non-normalised array, calculate and then assign the normalised element to the new array. We then return the new, normalised, 2D array.

![Code Segment 2](https://lh3.googleusercontent.com/u/0/drive-viewer/AFDK6gNtCXoL8wN3qFqls5YVNdfjY8k43TeSwqNRNF1tYUCqBM_qzipkLvcA5VOPnOBY-woQMxBzaMkhWesBHDAXCzvwhYV3Zw=w450)

Another function is then created that given two colours and a value, will find you the linear-ly interpolated colour value. Interpolation is a technique that allows you to “fill a gap” between two numbers. The rudimentary forumula for linear interpolation is $c=a+(b-a)\*t$ where $a$ and $b$ are the two numbers and t is a value between 1 and 0 that determines where, between the two numbers the derived number, or $c$, will be. This is then done on all 3 colour channels; red, green and blue. This will result in the returned value being a colour that is $t$ between the two colours.

![Code Segment 3](https://lh3.googleusercontent.com/u/0/drive-viewer/AFDK6gOVp-kO48fQLlbTFWxTxwfVLwGYYvEHXW-vn83VNjcwedLnAgPnuxBd97s6K6QaYlsumwYwqxqcyhWuYw-_OPKJnnu6sw=w450)

This is the setup function. When this is run and p5.js is installed, this is the function that will run first when the project is executed. In this case, the setup function will do all of the user input necessary to create the gradient. This will include the amount of colours, the RGB values of the colours themselves and the canvas height and width. It also takes into account if only 1 colour has been selected so it can just show a single colour. I have chosen not to implement input validation as this is a showcase rather than a program for production and distribution. At the end of the function, the canvas is created.

![Code Segment 4](https://lh3.googleusercontent.com/u/0/drive-viewer/AFDK6gMGZwXqyZj__QscPZjwSZ7CsDx_zNddvm7YUG7zKUw4RdAhqHGNl4HaiJ3QCVlQu7lonfIKAN-zP9y1Yp_-oYBwLr3A-A=w450)
