var items = {}
var id = 0
var _ = require('lodash')

function getId() {
	return id++
}


module.exports.init = function (app) {

	app.get('/item', function (req, res) {
		console.log('return items')
		return res.json(Object.keys(items).reduce(function (acc, key) {
			acc.push(items[key])
			return acc
		}, []))
	})

	app.post('/item', function (req, res) {
		var id = getId()
		if (!req.body)
			return res.json({}, 400)
		req.body.id = id
		items[id] = req.body
		console.log('save item', req.body)
		return res.json(req.body)
	})

	app.get('/item/:idItem', function (req, res) {
		console.log('return item', req.params.idItem)
		return res.json(items[req.params.idItem] || { error: 'Item not found' })
	})

	app.delete('/item/:idItem', function (req, res) {
		console.log('remove item', req.params.idItem)
		var item = items[req.params.idItem]
		if (item) {
			delete items[req.params.idItem]
			return res.json(item)
		}
		return res.json({ error: 'Item not found' })
	})

	app.put('/item/:idItem', function (req, res) {
		console.log('update item', req.params.idItem)
		var item = items[req.params.idItem]
		if (!req.body)
			return res.json({}, 400)
		if (item) {
			items[req.params.idItem] = _.merge(req.body, { id: item.id })
			return res.json(items[req.params.idItem])
		}
		return res.json({ error: 'Item not found' })
	})

}