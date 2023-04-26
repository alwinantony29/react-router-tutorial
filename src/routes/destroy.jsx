import { redirect } from "react-router-dom";
import { deleteContact } from "../contacts";


export async function deleteAction({params}){
    throw new Error("oh error adich guys")
    await deleteContact(params.contactId)
    alert('deleted')
    return redirect('/')
  }