import { createStore } from 'vuex'

export default createStore({
  state: {
		left_bar_highlight: 'jump0' ,// 左侧菜单列表高亮ID
		left_bar_jump: false,
		jump0: 0,
		jump1: 0,
		jump2: 0,
		jump3: 0,
		jump4: 0,
		jump5: 0,
		jump6: 0,
		jump7: 0,
		jump8: 0,
		jump9: 0
	},
  mutations: {
		left_bar_highlight_change(state, change) {
			// 通过传入的state对象赋值
			state.left_bar_highlight = change;
		},
		left_bar_jump_change(state, change) {
			// 通过传入的state对象赋值
			state.left_bar_jump = change;
		},
		jump_change(state, obj) {
			switch(obj.name) {
				case 'jump0': 
				state.jump0 = obj.top
				break;
				case 'jump1': 
				state.jump1 = obj.top
				break;
				case 'jump2': 
				state.jump2 = obj.top
				break;
				case 'jump3': 
				state.jump3 = obj.top
				break;
				case 'jump4': 
				state.jump4 = obj.top
				break;
				case 'jump5': 
				state.jump5 = obj.top
				break;
				case 'jump6': 
				state.jump6 = obj.top
				break;
				case 'jump7': 
				state.jump7 = obj.top
				break;
				case 'jump8': 
				state.jump8 = obj.top
				break;
				case 'jump9': 
				state.jump9 = obj.top
			}
		}
	},
  actions: {},
  getters: {
		jump_get(state) {
			switch(state.left_bar_highlight) {
				case 'jump0':
				return state.jump0
				case 'jump1':
				return state.jump1
				case 'jump2':
				return state.jump2
				case 'jump3':
				return state.jump3
				case 'jump4':
				return state.jump4
				case 'jump5':
				return state.jump5
				case 'jump6':
				return state.jump6
				case 'jump7':
				return state.jump7
				case 'jump8':
				return state.jump8
				case 'jump9':
				return state.jump9
			}
		}
	},
  modules: {}
})