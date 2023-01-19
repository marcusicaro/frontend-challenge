import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheck,
  faClose,
  faCross,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";

import "../assets/styles/searchbar.css";

export default function Searchbar(props) {
  return (
    <div className='search-container'>
      <div className='buttons'>
        <button
          onClick={() => {
            if (props.status !== "Done") {
              const newStatus = "Done";
              props.handleSearchTodo(props.search, newStatus);
              props.setStatus(newStatus);
            } else {
              const newStatus = "";
              props.handleSearchTodo(props.search, newStatus);
              props.setStatus(newStatus);
            }
          }}
          className={props.status === "Done" ? "active" : ""}
        >
          {props.status === "Done" ? (
            <FontAwesomeIcon icon={faCheck} className='check' />
          ) : (
            ""
          )}
          Done
        </button>
        <button
          onClick={() => {
            if (props.status !== "Pending") {
              const newStatus = "Pending";
              props.handleSearchTodo(props.search, newStatus);
              props.setStatus(newStatus);
            } else {
              const newStatus = "";
              props.handleSearchTodo(props.search, newStatus);
              props.setStatus(newStatus);
            }
          }}
          className={props.status === "Pending" ? "active" : ""}
        >
          {props.status === "Pending" ? (
            <FontAwesomeIcon icon={faCheck} className='check' />
          ) : (
            ""
          )}
          Pending
        </button>
      </div>

      <div className='search-input-container'>
        <input
          type='text'
          placeholder='Search items'
          onChange={(e) => {
            const newName = e.target.value;
            props.handleSearchTodo(newName, props.status);
            props.setSearch(newName);
          }}
          value={props.search}
          className='search-input'
        />
        <div
          onClick={() => {
            const empty = "";
            props.setStatus(empty);
            props.setSearch(empty);
            props.handleSearchTodo(empty);
          }}
          className='clear-search-field'
        >
          {props.search === "" ? (
            <FontAwesomeIcon icon={faMagnifyingGlass} className='icon' />
          ) : (
            <FontAwesomeIcon icon={faClose} className='icon' />
          )}
        </div>
      </div>
    </div>
  );
}
