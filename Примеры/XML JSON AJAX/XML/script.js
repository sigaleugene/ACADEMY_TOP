const xmlString = `<?xml version="1.0" encoding="UTF-8" ?> 
    <users>
        <user name="Tom" age="39">
            <company>
                <title>Microsoft</title>
            </company>
        </user>
        <user name="Bob" age="43">
            <company>
                <title>Google</title>
            </company>
        </user>
    </users>`;
 
const domParser = new DOMParser();
const xmlDOM = domParser.parseFromString(xmlString, "text/xml");
// обратимся к первому элементу user
const firstUser = xmlDOM.querySelector("user");
console.log(firstUser.getAttribute("name"));                  // Tom
console.log(firstUser.getAttribute("age"));                  // 39
console.log(firstUser.querySelector("title").textContent);    // Microsoft

//==========================================================
console.log("преобразуем обратно из XML в строку");
const xmlSerializer = new XMLSerializer();
const xmlString2 = xmlSerializer.serializeToString(xmlDOM);
console.log(xmlString2);