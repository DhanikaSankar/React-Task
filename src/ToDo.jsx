import React, { useState } from "react";
import {
  MDBInput,
  MDBCol,
  MDBRow,
  MDBCheckbox,
  MDBBtn,
  MDBCard,
  MDBIcon,
  MDBCardHeader,
} from "mdb-react-ui-kit";
import { Link, useNavigate } from "react-router-dom";
import "./Todo.css";

function ToDo() {
  const [task, setTask] = useState("");
  const [items, setItems] = useState([]);
  const nav = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setItems([...items, task]);
    setTask("");
  };

  const handleDelete = (id) => {
    setItems((previous) => {
      return items.filter((item, index) => {
        return index !== id;
      });
    });
  };


  return (
    <>
    <div className="d-flex">
      <MDBBtn style={{width:"200px",margin:"5px"}} onClick={()=>nav('/yellow')} className="btn-pri">Yellow Store</MDBBtn><br/>
      <MDBBtn style={{width:"200px",margin:"5px"}} onClick={()=>nav('/calculator')} className="btn-pri">Calculator</MDBBtn>
    </div>
    
      <MDBCard className="d-flex align-items-start bg-light">
        <MDBCardHeader>
          <b>TODO APP</b>
        </MDBCardHeader>

        <form onSubmit={handleSubmit} style={{alignItems:"center"}}>
          <MDBRow className="text-center">
            <MDBCol>
              <MDBInput
                className="mb-4"
                type="text"
                id="form1Example1"
                label="What is the task today?"
                value={task}
                onChange={(e) => setTask(e.target.value)}
                style={{ padding: "5px 80px" }}
              />
            </MDBCol>

            <MDBCol>
              <MDBBtn type="submit" style={{ padding: "5px 5px" }} className="btn-pri">
                Add Task
              </MDBBtn>
            </MDBCol>
          </MDBRow>
        </form>

        <div className="">
          {items.map((item, index) => {
            return (
              <>
                {index > 0 && item != "" ? (
                  <MDBRow>
                    <MDBCol style={{ width: "400px" }}>
                      <p key={index}>{item}</p>
                    </MDBCol>
                    <MDBCol>
                      <MDBIcon
                        onClick={() => handleDelete(index)}
                        fas
                        icon="trash"
                      />
                    </MDBCol>
                  </MDBRow>
                ) : (
                  ""
                )}
              </>
            );
          })}
        </div>
      </MDBCard>
    </>
  );
}

export default ToDo;
