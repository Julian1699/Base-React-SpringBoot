import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import reactLogo from '../assets/images/react-logo.png';
import bootstrapLogo from '../assets/images/bootstrap-logo.png';
import fontawesomeLogo from '../assets/images/fontawesome-logo.png';
import axiosLogo from '../assets/images/axios-logo.png';
import springLogo from '../assets/images/spring-logo.png';
import springdataLogo from '../assets/images/springdata-logo.png';
import swaggerLogo from '../assets/images/swagger-logo.png';
import mysqlLogo from '../assets/images/mysql-logo.png';

export default function Tecnologias() {
  return (
    <div className="container" style={{ marginTop: "30px", marginBottom: "30px" }}>
      <div className="card">
        <div className="card-body">
          <div className="text-center">
            <h3>Tecnologías Empleadas</h3>
            <p>
              Este proyecto utiliza una variedad de tecnologías modernas para el desarrollo de aplicaciones web.
            </p>
            <h4>Frontend</h4>
            <table className="table">
              <tbody>
                <tr>
                  <td>
                    <img src={reactLogo} alt="React Logo" style={{ height: '30px', marginRight: '10px' }} />
                    React: Biblioteca de JavaScript para construir interfaces de usuario
                  </td>
                </tr>
                <tr>
                  <td>
                    <img src={bootstrapLogo} alt="Bootstrap Logo" style={{ height: '30px', marginRight: '10px' }} />
                    Bootstrap: Framework CSS para el diseño responsivo
                  </td>
                </tr>
                <tr>
                  <td>
                    <img src={fontawesomeLogo} alt="Font Awesome Logo" style={{ height: '30px', marginRight: '10px' }} />
                    Font Awesome: Biblioteca de iconos vectoriales
                  </td>
                </tr>
                <tr>
                  <td>
                    <img src={axiosLogo} alt="Axios Logo" style={{ height: '30px', marginRight: '10px' }} />
                    Axios: Cliente HTTP para realizar solicitudes a la API
                  </td>
                </tr>
              </tbody>
            </table>
            <h4>Backend</h4>
            <table className="table">
              <tbody>
                <tr>
                  <td>
                    <img src={springLogo} alt="Spring Boot Logo" style={{ height: '30px', marginRight: '10px' }} />
                    Spring Boot: Framework para construir aplicaciones Java
                  </td>
                </tr>
                <tr>
                  <td>
                    <img src={springdataLogo} alt="Spring Data JPA Logo" style={{ height: '30px', marginRight: '10px' }} />
                    Spring Data JPA: Para interactuar con la base de datos
                  </td>
                </tr>
                <tr>
                  <td>
                    <img src={swaggerLogo} alt="Swagger Logo" style={{ height: '30px', marginRight: '10px' }} />
                    Swagger: Documentación interactiva de la API
                  </td>
                </tr>
                <tr>
                  <td>
                    <img src={mysqlLogo} alt="MySQL Logo" style={{ height: '30px', marginRight: '10px' }} />
                    MySQL: Sistema de gestión de bases de datos relacional
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
