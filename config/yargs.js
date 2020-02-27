const opts = {
	base:{
		demand: true,
		alias: 'b'
	},
	limite:{
		alias: 'l',
		default: 10
	}
}

const argv = require('yargs')
			.command('listar', 'Imprimir en consola', opts)
			.command('crear', 'Crea tabla',opts)
			.help()
			.argv;

		
module.exports = {
	argv
}