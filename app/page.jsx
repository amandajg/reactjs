"use client"
import CountButton from "./CountButton/CountButton"
import SearchBar from "./SearchBar/SearchBar"
export default function Page() {
    return <div>
    <CountButton /><CountButton />
    <hr />
    <a href="https://github.com/amandajg/reactjs">My github repo!</a>
    <hr />
    <SearchBar />
    </div>
}