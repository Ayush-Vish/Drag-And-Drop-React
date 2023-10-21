import { useState } from "react";
import "./App.css";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
function App() {

  const [arrr ,setArrr ] = useState([
    { name: "adrfewakjsb", id: "1" },
    { name: "adarfxaefwevecsdasdkjsb", id: "2" },
    { name: "adkdasdjsb", id: "3" },
    { name: "adddewvfwefwevsaasdsadkjsb", id: "4" },
    { name: "adqewewetwvewrtdsaasdaskjsb", id: "5" },
    { name: "adksadfsjsb", id: "6" },
    { name: "adksadfdfewfwefwejsb", id: "7" },
    { name: "adksadfdfewfwefwejsb", id: "8" },
    { name: "safwefswegseerfxsefs", id: "9" },
    { name: "adsfsfsfkjsb", id: "10" },
    { name: "adfsfksffsfjcsb", id: "11" },
    { name: "adksfsfssfsfsfjsb", id: "12" },
    { name: "adksfsfsfsfsjsb", id: "13" },
    { name: "adkfsdffjsfsfsfsdsfsb", id: "14" },
    { name: "adkfsfscsfsfjsb", id: "15" },
    { name: "adsfsfsksfjsb", id: "16" },
  ])
  function  handleDrop (result)  { 
    const {source  , destination  ,type } =result; 
    if(!destination) return ;
    if(source.droppableId ===destination.droppableId && source.index === destination.index) return;
    if(type==="group" )  {
      const reorderedStore = [...arrr]
      const sourceIndex = source.index
      const dstIndex=  destination.index 

      const [removedEle] = reorderedStore.splice(sourceIndex ,1 )  
      reorderedStore.splice(dstIndex ,0 , removedEle) 
      console.log(reorderedStore)
      return setArrr(reorderedStore)
    }


  }
  return (
      <DragDropContext onDragEnd={handleDrop}>
        <div className="op">
          <Droppable droppableId="droppable" type="group">
            {(provided) => (
              <div {...provided.droppableProps} ref={provided.innerRef}>
                {arrr.map((e, idx) => (
                  <Draggable draggableId={e.id} key={e.id} index={idx}>
                    {(provided) => (
                      <div
                        key={idx}
                        {...provided.dragHandleProps}
                        {...provided.draggableProps}
                        ref={provided.innerRef}
                      >
                        <p className="oppp">
                          {" "}
                          {e.id} {e.name}{" "}
                        </p>
                      </div>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
                
              </div>
            )}
          </Droppable>
        </div>
      </DragDropContext>
  );
}

export default App;
