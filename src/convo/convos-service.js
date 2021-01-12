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
//   getConvosByUserIdAndEventList(db, user_id, event_list) {
//     let eventListFieldName = `convos.ok_for_${event_list}`
//     console.log(eventListFieldName)
//     return db
//         .select('*')
//         .from('convos')
//         .where({
//             'convos.user_id': user_id,
//             'convos.ok_for_fashion': true
//         })
// },
getConvosByUserIdAndEventList(db, user_id, event_list) {
    if(event_list == 'fashion') {
      return db
            .select('*')
            .from('convos')
            .where({
              'ok_for_fashion': true
            })
            .andWhere(function() {
              this.where('is_public', true).orWhere('user_id', user_id) 
            })
    }
    if(event_list == 'work') {
      return db
            .select('*')
            .from('convos')
            .where({
              'ok_for_work': true
            })
            .andWhere(function() {
              this.where('is_public', true).orWhere('user_id', user_id) 
            })
    }
    if(event_list == 'entertainment') {
      return db
            .select('*')
            .from('convos')
            .where({
              'ok_for_entertainment': true
            })
            .andWhere(function() {
              this.where('is_public', true).orWhere('user_id', user_id) 
            })
    }
    if(event_list == 'exercise') {
      return db
            .select('*')
            .from('convos')
            .where({
              'ok_for_exercise': true
            })
            .andWhere(function() {
              this.where('is_public', true).orWhere('user_id', user_id) 
            })
    }
    if(event_list == 'travel') {
      return db
            .select('*')
            .from('convos')
            .where({
              'ok_for_travel': true
            })
            .andWhere(function() {
              this.where('is_public', true).orWhere('user_id', user_id) 
            })
    }
    if(event_list == 'technology') {
      return db
            .select('*')
            .from('convos')
            .where({
              'ok_for_technology': true
            })
            .andWhere(function() {
              this.where('is_public', true).orWhere('user_id', user_id) 
            })
    }
    if(event_list == 'holidays') {
      return db
            .select('*')
            .from('convos')
            .where({
              'ok_for_holidays': true
            })
            .andWhere(function() {
              this.where('is_public', true).orWhere('user_id', user_id) 
            })
    }
    if(event_list == 'education') {
      return db
            .select('*')
            .from('convos')
            .where({
              'ok_for_education': true
            })
            .andWhere(function() {
              this.where('is_public', true).orWhere('user_id', user_id) 
            })
    }
    if(event_list == 'food') {
      return db
            .select('*')
            .from('convos')
            .where({
              'ok_for_food': true
            })
            .andWhere(function() {
              this.where('is_public', true).orWhere('user_id', user_id) 
            })
    }
    if(event_list == 'leisure') {
      return db
            .select('*')
            .from('convos')
            .where({
              'ok_for_leisure': true
            })
            .andWhere(function() {
              this.where('is_public', true).orWhere('user_id', user_id) 
            })
    }
    // if(is_public == false) {
    //   return db
    //     .select('*')
    //     .from('convos')
    //     .where({
    //       'is_public': false
    //     })
    // }
    },
  //relevant
  insertConvos(db, newConvos) {
 
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
              'id': convos_id
          })
          .returning('*')
          .then(rows => {
              return rows[0]
          })
  },
  //relevant
  deleteConvos(db, convos_id, user_id) {
    
    if (user_id !== 1 || user_id !== 2) {
      console.log('this user is not allowed to delete convos')
    }
    return db('convos')
          .delete()
          .where({
              'id': convos_id
          })
  }
}

module.exports = ConvosService