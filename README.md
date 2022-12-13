# Gradient Generator 🟥->🟦
![Gradient Generator Logo Art](https://i.postimg.cc/mZ5DBVnK/New-Project-3-1.png)

A [p5.js](https://p5js.org/) project that creates linear gradients by setting individual pixels. (Art was made using generator 😉).

# Initial Ideas 1️⃣
When starting this project, I had a few ideas as of how I should implement it. As a code snippet, a plug-in or a website. I decided to create it as code snippet due to simplicity and ease-of-use for the examiner. It also allows for easy changes without having to completely alter my writeup in the case of a website or re-compilation and distribution in the case of a plug-in.

# Features 💡
- Linear gradient generation.
- Multiple colours.
- **To-Do:** Add support for cyclical gradients.

# Demo 🗂

[![Image of gradient and code](https://i.postimg.cc/jSGdP5Tc/Screenshot-2022-11-01-15-36-22.png "p5.js project")](https://editor.p5js.org/21jack.pike/sketches/W7AOevNsr)
(Click image for link to project).

# Wider Uses 🫸 🫷
This program has many uses in a various range of software. For example, an illustration-heavy software may have a large use for a program like this if they decide that gradients should feature in their software. It will allow users to create gradients with any amount of steps with any colours. It could also be used in a CSS framework for generating gradients from a singular function. This means that my program may be of use to developers and illustrators.

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

![Code Segment 1](https://i.postimg.cc/HWRpfncg/image.png)

A function is then declared to take an input of a 2-dimensional array containing each colour value. A seperate and empty 2D array is then created to contain the new, normalised values. This is done by using an ellipses from the JS rest syntax and mapping each element to an empty string. Then we use nested iteration to loop through each element of the non-normalised array, calculate and then assign the normalised element to the new array. We then return the new, normalised, 2D array.

![Code Segment 2](https://i.postimg.cc/hPVfsTCw/image.png)

Another function is then created that given two colours and a value, will find you the linear-ly interpolated colour value. Interpolation is a technique that allows you to “fill a gap” between two numbers. The rudimentary forumula for linear interpolation is $c=a+(b-a)\*t$ where $a$ and $b$ are the two numbers and t is a value between 1 and 0 that determines where, between the two numbers the derived number, or $c$, will be. This is then done on all 3 colour channels; red, green and blue. This will result in the returned value being a colour that is $t$ between the two original colours.

![Code Segment 3](https://i.postimg.cc/NGmsvY12/image.png)

This is the setup function. When this is run and p5.js is installed, this is the function that will run first when the project is executed. Due to the nature of p5.js, I have used the built-in `noLoop();` function so that the draw function is only run once. This seriously increases the performance because the gradient isnt being drawn over itself constantly. In this case, the setup function will do all of the user input necessary to create the gradient. This will include the amount of colours, the RGB values of the colours themselves and the canvas height and width. It also takes into account if only 1 colour has been selected so it can just show a single colour. I have chosen not to implement input validation as this is a showcase rather than a program for production and distribution. At the end of the function, the canvas is created.

![Code Segment 4](https://i.postimg.cc/505RpPCy/image.png)

The final step is the draw function. This is arguably the most complex part due to the maths needed to render and set each pixel to the desired colour. The p5.js library runs the draw function straight after the setup function so this is where I have included the rendering code. First we initialise two variables in the local scope. We then loop each pixel along the x-axis of the image. The step index is then calculated by rounding down the amount of pixels you are through the image divded by the width of a step. The width of a step is calculated by dividing the width of the canvas by the amount of steps - 1. The variable fraction is then calculated by dividing the modulus of i and the width of a step by the width of a step. The colour value c is then calculated by using the lerp funtion created earlier. The colours used are determined by taking the current step index and the incremented step index and taking those index's of the array populated by the colours chosen by the user. we then loop through all the pixels in the y-axis for when x is equal to i and set all of those pixels to the colour calculated earlier. At the end of the function, the buffer is then swapped and the new and updated pixels are displayed.

![Code Segment 5](https://i.postimg.cc/NFzZSdgc/image.png)

# Sources 👾
- https://www.alanzucconi.com/2016/01/06/colour-interpolation/
- https://facelessuser.github.io/coloraide/interpolation/
- https://en.wikibooks.org/wiki/Color_Theory/Color_gradient
- https://graphicdesign.stackexchange.com/questions/100917/how-do-i-calculate-color-gradients
- https://p5js.org/learn/
- https://p5js.org/reference/#/p5/set
