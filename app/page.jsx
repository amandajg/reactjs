"use client"
import CountButton from "./CountButton/CountButton"
import CountButton2 from "./CountButton/CountButton2"
import SearchBar from "./SearchBar/SearchBar"
export default function Page() {
    return <div>
    <CountButton /><CountButton2 />
    <hr />
    <a href="https://github.com/amandajg/reactjs">My github repo!</a>
    <hr />
    <SearchBar />
    </div>
}