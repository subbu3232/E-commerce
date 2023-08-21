    import React from 'react'
    import styles from './Productcard.module.css'
    import Swal from 'sweetalert2'

    const Productcard=({id,image,title,price,addtocart})=>{
        // console.log(title,price)
            return(
    <div className={styles.pcard}>
    <img className={styles.img} src={image}></img>
    <p> {title}</p>
    <p>{price}</p>
    <button className={styles.button}onClick={()=>{
        
        addtocart(id,title,price,image)
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: `Product Added To Cart Successfully`,
            showConfirmButton: false,
            timer: 700,
          });
    }
    
    } 
        
        
        >Add To Cart &#128722;</button>

    </div>

        )
    }
    export default Productcard