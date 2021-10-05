const request = new XMLHttpRequest();

const getMenu = () => {
    request.open("GET", "https://www.w3schools.com/xml/simple.xml", true);
    request.send();
};
