import { Card } from "../common/Card"

const ItemListContainer = (props)=>{
    return(
        
        <div>
            <h2>{props.greeting}</h2>
            <h1>Productos</h1>
            <Card titulo= {"nike"} desc={"remera deportiva mujer"} precio={20000} />
            <Card titulo= {"adidas"} desc={"remera deportiva hombre"} precio={25000}/>
            <Card titulo= {"adidas"} desc={"zapatilla deportiva mujer"} precio={120000}/>
        </div>
        
    )
}

export default ItemListContainer