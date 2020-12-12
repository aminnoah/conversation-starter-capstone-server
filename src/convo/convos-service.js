const ConvosService = {
  //relevant
  getConvos(db) {
      return db
          .select('*')
          .from('convos')
  },
  getConvosById(db, convos_id) {
      return db
          .select('*')
          .from('convos')
          .where('convos.id', convos_id)
          .first()
  },
  //relevant
  insertConvos(db, newConvos) {
    //console.log(newConvos)
      return db
          .insert(newConvos)
          .into('convos')
          .returning('*')
          .then(rows => {
              return rows[0]
          })
  },
  //relevant
  updateConvos(db, convos_id, newConvos) {
      return db('convos')
          .update(newConvos, returning = true)
          .where({
              id: convos_id
          })
          .returning('*')
          .then(rows => {
              return rows[0]
          })
  },
  //relevant
  deleteConvos(db, convos_id) {
      return db('convos')
          .delete()
          .where({
              'id': convos_id
          })
  }
}

module.exports = ConvosService