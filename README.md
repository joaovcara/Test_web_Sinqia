<h1>
  Crud com Net 6.0 e React JS
</h1>

## Objetivo
<div style="display: flex; justify-content: center">  
  <p style="text-align: left">Este projeto tem como foco principal, apresentar minhas habilidades e competências em desenvolvimento de software.</p>
</div>

## Vídeo de Demonstração

https://github.com/joaovcara/Test_web_Sinqia/assets/62843342/bb60afba-c062-474f-b8e8-435fc5e88dac

## Tecnologias
<div style="display: flex; justify-content: center">
    <img alt="CSharp" src="https://github.com/joaovcara/Test_web_Sinqia/blob/main/app/src/assets/img/html.png?raw=true" height="85px"/>
    <img alt="CSharp" src="https://github.com/joaovcara/Test_web_Sinqia/blob/main/app/src/assets/img/css.png?raw=true" height="85px"/>
    <img alt="CSharp" src="https://github.com/joaovcara/Test_web_Sinqia/blob/main/app/src/assets/img/js.png?raw=true" height="85px"/>
    <img alt="CSharp" src="https://github.com/joaovcara/Test_web_Sinqia/blob/main/app/src/assets/img/csharp.png?raw=true" height="85px"/>
    <img alt="CSharp" src="https://github.com/joaovcara/Test_web_Sinqia/blob/main/app/src/assets/img/sql.png?raw=true" height="85px"/>
    <img alt="CSharp" src="https://github.com/joaovcara/Test_web_Sinqia/blob/main/app/src/assets/img/react.png?raw=true" height="85px"/>
    <img alt="CSharp" src="https://github.com/joaovcara/Test_web_Sinqia/blob/main/app/src/assets/img/mui.png?raw=true" height="85px"/>
</div>

## Instruções para executar o projeto  
<div>
  <p>Ferramentas utilizadas</p>
  <ul>
    <li>Visual Studio 2022</li>
    <li>Visual Studio Code</li>
    <li>SQL Server Management Studio</li>  
  <ul>
</div>

### Utilitários
  <p style="text-align: left">*Considero que já tenha o git instalado.*</p>
  <p style="text-align: left">Realizar seguintes instalações</p>
  
  <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="105" height="20" role="img" aria-label="npm: v10.2.0"><title>npm: v10.2.0</title><linearGradient id="s" x2="0" y2="100%"><stop offset="0" stop-color="#bbb" stop-opacity=".1"/><stop offset="1" stop-opacity=".1"/></linearGradient><clipPath id="r"><rect width="105" height="20" rx="3" fill="#fff"/></clipPath><g clip-path="url(#r)"><rect width="52" height="20" fill="#555"/><rect x="52" width="53" height="20" fill="#007ec6"/><rect width="105" height="20" fill="url(#s)"/></g><g fill="#fff" text-anchor="middle" font-family="Verdana,Geneva,DejaVu Sans,sans-serif" text-rendering="geometricPrecision" font-size="110"><image x="5" y="3" width="14" height="14" xlink:href="data:image/svg+xml;base64,PHN2ZyBmaWxsPSIjMzM5OTMzIiByb2xlPSJpbWciIHZpZXdCb3g9IjAgMCAyNCAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48dGl0bGU+Tm9kZS5qczwvdGl0bGU+PHBhdGggZD0iTTExLjk5OCwyNGMtMC4zMjEsMC0wLjY0MS0wLjA4NC0wLjkyMi0wLjI0N2wtMi45MzYtMS43MzdjLTAuNDM4LTAuMjQ1LTAuMjI0LTAuMzMyLTAuMDgtMC4zODMgYzAuNTg1LTAuMjAzLDAuNzAzLTAuMjUsMS4zMjgtMC42MDRjMC4wNjUtMC4wMzcsMC4xNTEtMC4wMjMsMC4yMTgsMC4wMTdsMi4yNTYsMS4zMzljMC4wODIsMC4wNDUsMC4xOTcsMC4wNDUsMC4yNzIsMGw4Ljc5NS01LjA3NiBjMC4wODItMC4wNDcsMC4xMzQtMC4xNDEsMC4xMzQtMC4yMzhWNi45MjFjMC0wLjA5OS0wLjA1My0wLjE5Mi0wLjEzNy0wLjI0MmwtOC43OTEtNS4wNzJjLTAuMDgxLTAuMDQ3LTAuMTg5LTAuMDQ3LTAuMjcxLDAgTDMuMDc1LDYuNjhDMi45OSw2LjcyOSwyLjkzNiw2LjgyNSwyLjkzNiw2LjkyMXYxMC4xNWMwLDAuMDk3LDAuMDU0LDAuMTg5LDAuMTM5LDAuMjM1bDIuNDA5LDEuMzkyIGMxLjMwNywwLjY1NCwyLjEwOC0wLjExNiwyLjEwOC0wLjg5VjcuNzg3YzAtMC4xNDIsMC4xMTQtMC4yNTMsMC4yNTYtMC4yNTNoMS4xMTVjMC4xMzksMCwwLjI1NSwwLjExMiwwLjI1NSwwLjI1M3YxMC4wMjEgYzAsMS43NDUtMC45NSwyLjc0NS0yLjYwNCwyLjc0NWMtMC41MDgsMC0wLjkwOSwwLTIuMDI2LTAuNTUxTDIuMjgsMTguNjc1Yy0wLjU3LTAuMzI5LTAuOTIyLTAuOTQ1LTAuOTIyLTEuNjA0VjYuOTIxIGMwLTAuNjU5LDAuMzUzLTEuMjc1LDAuOTIyLTEuNjAzbDguNzk1LTUuMDgyYzAuNTU3LTAuMzE1LDEuMjk2LTAuMzE1LDEuODQ4LDBsOC43OTQsNS4wODJjMC41NywwLjMyOSwwLjkyNCwwLjk0NCwwLjkyNCwxLjYwMyB2MTAuMTVjMCwwLjY1OS0wLjM1NCwxLjI3My0wLjkyNCwxLjYwNGwtOC43OTQsNS4wNzhDMTIuNjQzLDIzLjkxNiwxMi4zMjQsMjQsMTEuOTk4LDI0eiBNMTkuMDk5LDEzLjk5MyBjMC0xLjktMS4yODQtMi40MDYtMy45ODctMi43NjNjLTIuNzMxLTAuMzYxLTMuMDA5LTAuNTQ4LTMuMDA5LTEuMTg3YzAtMC41MjgsMC4yMzUtMS4yMzMsMi4yNTgtMS4yMzMgYzEuODA3LDAsMi40NzMsMC4zODksMi43NDcsMS42MDdjMC4wMjQsMC4xMTUsMC4xMjksMC4xOTksMC4yNDcsMC4xOTloMS4xNDFjMC4wNzEsMCwwLjEzOC0wLjAzMSwwLjE4Ni0wLjA4MSBjMC4wNDgtMC4wNTQsMC4wNzQtMC4xMjMsMC4wNjctMC4xOTZjLTAuMTc3LTIuMDk4LTEuNTcxLTMuMDc2LTQuMzg4LTMuMDc2Yy0yLjUwOCwwLTQuMDA0LDEuMDU4LTQuMDA0LDIuODMzIGMwLDEuOTI1LDEuNDg4LDIuNDU3LDMuODk1LDIuNjk1YzIuODgsMC4yODIsMy4xMDMsMC43MDMsMy4xMDMsMS4yNjljMCwwLjk4My0wLjc4OSwxLjQwMi0yLjY0MiwxLjQwMiBjLTIuMzI3LDAtMi44MzktMC41ODQtMy4wMTEtMS43NDJjLTAuMDItMC4xMjQtMC4xMjYtMC4yMTUtMC4yNTMtMC4yMTVoLTEuMTM3Yy0wLjE0MSwwLTAuMjU0LDAuMTEyLTAuMjU0LDAuMjUzIGMwLDEuNDgyLDAuODA2LDMuMjQ4LDQuNjU1LDMuMjQ4QzE3LjUwMSwxNy4wMDcsMTkuMDk5LDE1LjkxLDE5LjA5OSwxMy45OTN6Ii8+PC9zdmc+"/><text aria-hidden="true" x="355" y="150" fill="#010101" fill-opacity=".3" transform="scale(.1)" textLength="250">npm</text><text x="355" y="140" transform="scale(.1)" fill="#fff" textLength="250">npm</text><text aria-hidden="true" x="775" y="150" fill="#010101" fill-opacity=".3" transform="scale(.1)" textLength="430">v10.2.0</text><text x="775" y="140" transform="scale(.1)" fill="#fff" textLength="430">v18.18.0</text></g></svg>

  <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="105" height="20" role="img" aria-label="npm: v10.2.0"><title>npm: v10.2.0</title><linearGradient id="s" x2="0" y2="100%"><stop offset="0" stop-color="#bbb" stop-opacity=".1"/><stop offset="1" stop-opacity=".1"/></linearGradient><clipPath id="r"><rect width="105" height="20" rx="3" fill="#fff"/></clipPath><g clip-path="url(#r)"><rect width="52" height="20" fill="#555"/><rect x="52" width="53" height="20" fill="#007ec6"/><rect width="105" height="20" fill="url(#s)"/></g><g fill="#fff" text-anchor="middle" font-family="Verdana,Geneva,DejaVu Sans,sans-serif" text-rendering="geometricPrecision" font-size="110"><image x="5" y="3" width="14" height="14" xlink:href="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0MCA0MCI+PHBhdGggZD0iTTAgMGg0MHY0MEgwVjB6IiBmaWxsPSIjY2IwMDAwIi8+PHBhdGggZmlsbD0iI2ZmZiIgZD0iTTcgN2gyNnYyNmgtN1YxNGgtNnYxOUg3eiIvPjwvc3ZnPg=="/><text aria-hidden="true" x="355" y="150" fill="#010101" fill-opacity=".3" transform="scale(.1)" textLength="250">npm</text><text x="355" y="140" transform="scale(.1)" fill="#fff" textLength="250">npm</text><text aria-hidden="true" x="775" y="150" fill="#010101" fill-opacity=".3" transform="scale(.1)" textLength="430">v10.2.0</text><text x="775" y="140" transform="scale(.1)" fill="#fff" textLength="430">v10.1.0</text></g></svg>
  

## Instalação e execução:

Na primeira vez que for utilizar, faça um clone deste repositório:

```bash
$ git clone https://github.com/joaovcara/Test_web_Sinqia.git
```

### Criando Banco de dados (Sql Server)

  <p style="text-align: left">Execute o script SQL <strong>SqlBase.sql</strong> dentro da pasta db, este script irá criar o banco de dados, tabelas e inserir dados padrões.</p>

  #### Configurando banco de dados na API
  <p style="text-align: left">Abrir o projeto <strong>api</strong> no Visual Studio, e editar o arquivo <strong>appsettings.json</strong>, colocando a sua instância do SqlServer.</p>

  ```bash
  "ConnectionStrings": {
    "TestSinqia": "Server=<SUA_INSTANCIA_SQL>; Database=TestSinqia; Integrated Security=True; trustServerCertificate=true"
  }
  ```  

### Rodando o projeto
  <p style="text-align: left">Executar a API no Visual Studio com IIS. a mesma está configurada para ser executada via IIS e acessada localhost na porta 44332.
  </p>

  <p style="text-align: left">Para executar o front end abra o projeto no Visual Studio Code ou abra um terminal na pasta <strong>app</strong> do projeto.</p>

  <p>Execute o seguinte comando:</p>

  ```bash
  $ npm start
  ```

  <p>Seguindo estes passos o projeto estará rodando API e FrontEnd com banco  de dados já criado, sendo posível acessar no navegador.</p>

## Imagens
 <img alt="CSharp" src="https://github.com/joaovcara/Test_web_Sinqia/blob/main/app/src/assets/img/photos/HomeSystem.png?raw=true" height="auto"/>
 <img alt="CSharp" src="https://github.com/joaovcara/Test_web_Sinqia/blob/main/app/src/assets/img/photos/PontoTuristico.png?raw=true" height="auto"/>
  
  
