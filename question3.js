function getIdsByMessage(xml, message) {
    parser = new DOMParser();
    xmlDoc = parser.parseFromString(xml, "text/xml");
    ids = []
    const messages = [...xmlDoc.getElementsByTagName("message")]

    switch (message) {
        case 'Application started':
            messages.forEach(message => {
                if (message.innerHTML === 'Application started') {
                    ids.push(message.parentElement.id)
                }
            })
            return ids
            break;
        case 'Application ended':
            messages.forEach(message => {
                if (message.innerHTML === 'Application ended') {
                    ids.push(message.parentElement.id)
                }
            })
            return ids
            break;
    }

}

var xmlData =
    `<?xml version="1.0" encoding="UTF-8"?>
<log>
  <entry id="1">
    <message>Application started</message>
  </entry>
  <entry id="2">
    <message>Application ended</message>
  </entry>
  <entry id="3">
    <message>Application ended</message>
  </entry>
</log>`;

var ids = getIdsByMessage(xmlData, "Application ended");
console.log(ids == undefined ? ids : ids.join());