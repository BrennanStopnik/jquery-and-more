let div = $("<div></div>");
let body = $("body");
let para = $("<p>Hello World!</p>");

body.append(div);
div.append(para);

div.on('click', () => {
    alert(`Hello World`)
})

body.css({
    backgroundColor: 'lightblue',
    color: 'darkblue'
});