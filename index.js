const fs = require( 'fs' )
const express = require( 'express' )
const app = express()

const PORT = 3000

app.listen( PORT, console.log( `Servidor encendido en: http://localhost:${ PORT }` ) )

app.use( express.json() )

app.get( "/", ( req, res ) => {
  res.sendFile( __dirname + "/index.html" )
} )

app.post( "/canciones", ( req, res ) => {
  const song = req.body
  const songs = JSON.parse( fs.readFileSync( 'repertorio.json' ) )
  songs.push( song )
  fs.writeFileSync( 'repertorio.json', JSON.stringify( songs ) )
  res.send( 'Canción agregada exitósamente' )
} )

app.get( "/canciones", ( req, res ) => {
  const songs = JSON.parse( fs.readFileSync( 'repertorio.json' ) )
  res.json( songs )
} )

app.put( "/canciones/:id", ( req, res ) => {
  // algo para editar las canciones
} )

app.delete( "canciones/:id", ( req, res ) => {
  // algo para borrar las canciones
} )