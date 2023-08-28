/* Components */
import { Routes, Route, Navigate } from "react-router-dom"
import AddCompetitor from "./kilpailijat/AddCompetitor"



export default function IndexPage() {
  <Route path="/kilpailijat/uusikilpailija" element={<AddCompetitor />} />
}

export const metadata = {
  title: 'Sportchambara tulospalvelu',
}
