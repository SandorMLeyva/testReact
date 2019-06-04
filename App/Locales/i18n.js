//
//  i18n.js
//  123
//
//  Created by [Author].
//  Copyright © 2018 [Company]. All rights reserved.
//

import es from './es.json'
import I18n from 'i18n-js'
import en from './en.json'

I18n.fallbacks = true
I18n.translations = { en, es }

export function strings(name, params = {}) {

	return I18n.t(name, params = {})
}
