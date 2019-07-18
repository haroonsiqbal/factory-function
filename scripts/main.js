//const createContact = (valName, valTitle, valEmail) => {
//  return {
//    name: valName,
//  title: valTitle,
//email: valEmail
//}
//}

//you can also write the above as below


const contactList = document.querySelector("#contactList");

const createContact = (name, title, email) =>
    ({ name, title, email })

const displayContact = (object) => {
    const htmlRep = `
        <section class="contact">
            <h1>${object.name}</h1>
            <h2>${object.title}</h2>
            <div>${object.email}</div>
        </section>
    `
contactList.innerHTML += htmlRep; 

}

const haroon = createContact("haroon", "dev", "haroon@email.com");
const steve = createContact("steve", "hr", "steve@steve.com");
const jen = createContact("jen", "finance", "jen@jen.com");
const juan = createContact("juan", "lawyer", "juan@juan.com");
const pratik = createContact("pratik", "pr", "pratik@pratik.com");

displayContact(haroon);
displayContact(steve);
displayContact(jen);
displayContact(juan);
displayContact(pratik);