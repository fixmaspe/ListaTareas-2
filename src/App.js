import React, { useState, useEffect } from 'react'
import Form from './components/Form'
import List from './components/List'

const defaultList = [
   { id: 1, baslik: "Ir al gimnasio", dat: "19.01.2022", ok: false },
   { id: 2, baslik: "Estudiar Js", dat: "20.01.2022", ok: true },
   { id: 3, baslik: "Cena Familiar", dat: "21.01.2022", ok: false },
   { id: 4, baslik: "Cita Medica", dat: "23.01.2022", ok: true },
   { id: 5, baslik: "Compras Para La Casa", dat: "19.02.2022", ok: false },
   { id: 6, baslik: "Entrevista", dat: "20.02.2022", ok: false }
]

export default function App() {

   const [liste, setListe] = useState(defaultList)

   const [tasks, setTasks] = useState()

   const listAdd = (item) => setListe([...liste, { id: Date.now(), baslik: item, dat: new Date().toLocaleDateString(), ok: false }])

   const listOk = (id) => setListe(liste.map(item => item.id == id ? { ...item, ok: !item.ok } : item))

   const listClear = () => setListe(liste.filter(item => !item.ok))

   const listRemove = (id) => setListe(liste.filter(item => item.id !== id))

   useEffect(() => {
      let num = 0
      liste.map(item => item.ok ? ++num : null)
      setTasks(num)
   })

   return (
      <main>

         <h1><i className="bi bi-check2-square"> </i>Lista de Tareas 🧉</h1>

         <Form listAdd={listAdd} />
         <List list={liste} listOk={listOk} listClear={listClear} listRemove={listRemove} />
         <div className="screen">
            <span className="tasks">
               <span className="bi bi-check2-circle"> {tasks}</span>
               <span className="bi bi-circle"> {liste.length - tasks}</span>
            </span>
            <button className="clear" onClick={listClear}><i className="bi bi-clipboard-x"> </i>Eliminar Todo</button>
         </div>

      </main>
   )
}