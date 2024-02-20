import logo from "../../assets/images/logofb4.png"


const Footerfb = () => {
   return (
    <footer className="footerindex">

    <div className="horarios-footer">
       <img className="img-logof" src={logo} alt="Logo FB Distribuidora"/>
      <ul>
       <li> LUN a VIE 10 A 12 Y 14 A 19HS.</li>
       <li> SÁB DE 11 A 13HS.</li>
      </ul>
    </div>

   <div className="info-footer">
     <ul>
       <li>
         <p className="titulo-info">INFO</p>
       </li>
       <li>
         Podés comprar todo por unidad o mayor.
       </li>
       <li>
       Tranferencia Bancaria/Efectivo
       </li>
       <li>
         Envíos a CABA/AMBA , costo según zona!
       </li>
     </ul>
   
   </div>

    <div className="contacto-footer">
     <ul>
       <li><p className="titulo-contacto">CONTACTO</p></li>
       <li>11-3455-4355</li>
       <li>distribuidora.limpiezafb@gmail.com</li>
       <li>San Justo, Buenos Aires</li>
     </ul>
    </div>

    <div className="copy-footer">
     <p>&copy; 2023 FB Distruibuidora | Derechos Reservados</p>
    </div>
    </footer>
  )
}

export default Footerfb