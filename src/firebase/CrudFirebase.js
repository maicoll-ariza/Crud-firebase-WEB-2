import { collection, deleteDoc, doc, getDocs, setDoc, updateDoc } from "firebase/firestore/lite"
import { FirebaseDB } from "./config"

export const startLoadEquipos = async () => {
    const ref = collection( FirebaseDB, 'equipos/' )
    const docs = await getDocs( ref )

    const teams = [];

    docs.forEach( doc => {
        teams.push({ id: doc.id, ...doc.data() })
    })

    console.log(teams);

    return teams

}


export const startSetNewEquipo = async( newEquipo) => {

    const ref = doc( collection( FirebaseDB, 'equipos/' ) )
    delete newEquipo.id
    await setDoc( ref, newEquipo )

    const id = ref.id
    console.log(id + ' en log en basedatos');

    return id
}

export const startDeleting = async ( id ) => {

    const ref = doc( FirebaseDB, `equipos/${ id }` )
    await deleteDoc( ref )

}

export const startUpdatingEquipo = async ({ id, nombreEquipo, nombreEstadio, nombreTecnico, nombreCapitan, canTitulos, liga,fechaFundacion, img }) => {
   
    console.log({id, nombreEquipo, nombreEstadio, nombreTecnico, nombreCapitan, canTitulos, liga,fechaFundacion, img});
    const ref = doc( FirebaseDB, `/equipos/${ id }` )
    await updateDoc( ref, ({ nombreEquipo, nombreEstadio, nombreTecnico, nombreCapitan, canTitulos, liga,fechaFundacion, img }) )
    

}