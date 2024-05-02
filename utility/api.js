import 'react-native-get-random-values';
import { v4} from 'uuid';
const mapConcact= (concact) =>{
    const{name, picture,phone,cell,email}=concact
    return{
        id: v4(),
        name: name.first+" "+name.last,
        avatar: picture.large,
        phone,
        cell,
        email,
        favorite: Math.random()>=0.5,
    }
}
const fetchContacts = async ()=>{
    const reponse = await fetch("https://randomuser.me/api/?results=100&seed=fullstackio")
    const contactData = await reponse.json()
    return contactData.results.map(mapConcact)
};
const fetchUserContact = async ()=>{
    const reponse = await fetch("https://randomuser.me/api/?seed=fullstackio")
    const contactData= await reponse.json();
    return mapConcact(contactData.results[0]);
};
const fetchRandomContact = async ()=>{
    const reponse = await fetch("https://randomuser.me/api/")
    const contactData=await reponse.json();
    return mapConcact(contactData.results[0]);
};
export {fetchContacts,fetchUserContact,fetchRandomContact}