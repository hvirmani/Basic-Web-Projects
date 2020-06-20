var arr = [{
        quote: "\"The greatest glory in living lies not in never falling, but in rising every time we fall.\"",
        author: "Nelson Mandela"
            },
    {
        quote: "\"The way to get started is to quit talking and begin doing.\"",
        author: "Walt Disney"
            },
    {
        quote: "\"Life is what happens when you're busy making other plans.\"",
        author: "John Lennon"
            },
    {
        quote: "\"Spread love everywhere you go. Let no one ever come to you without leaving happier.\"",
        author: "Mother Teresa"
            },
    {
        quote: "\"When you reach the end of your rope, tie a knot in it and hang on.\"",
        author: "Franklin D. Roosevelt"
            },
    {
        quote: "\"Don't judge each day by the harvest you reap but by the seeds that you plant.\"",
        author: "Robert Louis Stevenson"
            },
    {
        quote: "\"Tell me and I forget. Teach me and I remember. Involve me and I learn.\"",
        author: "Benjamin Franklin"
            },
    {
        quote: "\"The best and most beautiful things in the world cannot be seen or even touched - they must be felt with the heart.\"",
        author: "Helen Keller"
            },
    {
        quote: "\"Whoever is happy will make others happy too.\"",
        author: "Anne Frank"
            },
    {
        quote: "\"You will face many defeats in life, but never let yourself be defeated.\"",
        author: "Maya Angelou"
            },
    {
        quote: "\"The greatest glory in living lies not in never falling, but in rising every time we fall.\"",
        author: "Nelson Mandela"
            },
    {
        quote: "\"In the end, it's not the years in your life that count. It's the life in your years.\"",
        author: "Abraham Lincoln"
            },
    {
        quote: "\"Life is either a daring adventure or nothing at all.\"",
        author: "Helen Keller"
            },
    {
        quote: "\"Many of life's failures are people who did not realize how close they were to success when they gave up.\"",
        author: "Thomas A. Edison"
            },
    {
        quote: "\"The only impossible journey is the one you never begin.\"",
        author: "Tony Robbins"
            },
    {
        quote: "\"Only a life lived for others is a life worthwhile.\"",
        author: "Albert Einstein"
            },
        ];
var a = 0,
    b;
window.onload = function () {
    a = Math.floor(Math.random() * 16);
    $(".line").text(arr[a].quote);
    $(".auth").text(arr[a].author);
    b = a;
};
$(document).ready(function () {
    $("#gen").click(function () {
        b = a;
        a = Math.floor(Math.random() * 16);
        while (b == a)
            a = Math.floor(Math.random() * 16);
        $(".line").text(arr[a].quote);
        $(".auth").text(arr[a].author);
    });
    $("#pre").click(function () {
        $(".line").text(arr[b].quote);
        $(".auth").text(arr[b].author);
    });
});