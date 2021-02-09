import funk from "@theme-ui/preset-funk"

import bg from "../images/bg.jpg"

const theme = {
    ...funk,
    fonts: {
        body: 'Lora, sans-serif',
        heading: '"Oleo Script Swash Caps", "Comic Sans MS", sans-serif',
        monospace: 'Menlo, monospace',    
    },
    fontWeights: {
        ...funk.fontWeights,
        heading: 700,
        bold: 700,
    },
    colors: {
        ...funk.colors,
        text: 'rgb(233,46,103)',
        background: 'rgb(255, 250, 250)',
        primary: 'rgb(233,46,103)',
        secondary: 'rgb(233,46,103)',
    },
    styles: {
        ...funk.styles,
        root: {
            fontFamily: 'body',
            fontWeight: 'body',
            backgroundImage: `url('${bg}')`,
            backgroundAttachment: 'fixed',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: 'bottom left'
        }
    }
}

console.log(theme)

export default theme