const express = require('express')
const exphbs = require('express-handlebars')
const conn = require('./db/conn')
const routerCompras = require('./routers/compras')
const app = express()

app.use( express.urlencoded( { extended: true } ) )
app.use( express.json() )
app.use( express.static( 'public' ) )

app.use( '/', routerCompras)

app.engine( 'hbs', exphbs.engine( { extname: '.hbs' } ) )
app.set( 'view engine' , 'hbs' )

conn
.sync()
.then(() => {
    app.listen(3000)
    console.log('rodando na porta 3000...')
})
.catch((error) => console.log(error))