export const createSelects = () => {
	const allSelect = Array.from(document.querySelectorAll(".select:not(.select--created)"));

	allSelect.forEach(function (select, index) {
		select.classList.add('select--created')
		let selectElm = select.querySelector("select");
		// GETTING ARRAY OF OPTIONS IN SELECT
		let options = Array.from(selectElm.children);
		let mainContainer = document.createElement("div");
		// APPENDING OPTIONS
		let ul = document.createElement("ul");
		ul.className = "select__list";
		ul.setAttribute("custom-scrollbar", "");
		mainContainer.className = "select__options";
		mainContainer.setAttribute("data-select-head", "select-" + index + "");
		select.appendChild(mainContainer)

		let SelectHead = document.createElement("div");
		// CREATING ACTIVE ELEMENT Appending Select Box with and Checking Default Value And Appending Search Box with
		createHead(SelectHead);
		// ITERATING OVER OPTIONS
		let liContainer = "";
		// CHECKING IF IT CONTAINS SELECT-SEARCH AND APPEND SELECT BOX
		appendingOptions(options);

		let activeHead = select.querySelector(".select__control");
		let SelectOptionsList = document.querySelector(".select__options[data-select-head=" + "select-" + index + "]");

		function createHead(headElem) {
			let DefaultSelectedValue = selectElm.querySelector("[selected]") || selectElm.querySelector('option')
			Object.assign(headElem,{
				className: "select__control",
				innerHTML: DefaultSelectedValue.textContent
			})
			//headElem.className = "select__control";
			headElem.setAttribute("data-select-index", "select-" + index + "");
			//headElem.innerHTML = DefaultSelectedValue.textContent;
			select.appendChild(headElem);
			select.appendChild(mainContainer);
			mainContainer.appendChild(ul);

		}
		// ITERATING OVER OPTIONS
		function appendingOptions(list) {
			let code = ""
			for (let x = 0; x < list.length; x++) {
				if (list[x].tagName == "OPTION") {
					code = "<li class='select__item ripple' data-value=" + list[x].value + ">" + list[x].textContent + "</li>";
				} else {
					let head = "<li class='select__label'>" + list[x].getAttribute('label') + "</li>"
					let lists = ""
					let optgroupChildren = Array.from(list[x].children);
					for (let i = 0; i < optgroupChildren.length; i++) {
						lists += "<li class='select__item ripple' data-value=" + optgroupChildren[i].value + ">" + optgroupChildren[i].textContent + "</li>";
					}
					code = head + lists
				}

				liContainer += code;
			}

			ul.innerHTML = liContainer;
		}
		// FILTERING OPTIONS
		function filterOptions(val) {
			let pattern = new RegExp(val, "i");
			let optionsToShow = options.filter(function (option) {
				if (pattern.test(option.textContent) === true) {
					return option;
				}
			});
			liContainer = "";
			appendingOptions(optionsToShow);
			ul.innerHTML = liContainer;
		}
		// ADJUST SIZE + WIDTH
		function adjustSize() {
			mainContainer.style.width = SelectHead.offsetWidth + 1 + "px";
			// mainContainer.style.left = SelectHead.getBoundingClientRect().left + "px";
			// if (mainContainer.classList.contains("has-search")) {
			// 	mainContainer.style.top = SelectHead.getBoundingClientRect().top + window.pageYOffset + "px";
			// } else {
			// 	mainContainer.style.top = SelectHead.getBoundingClientRect().bottom + 5 + window.pageYOffset + "px";
			// }
		}
		// DEBOUNCE FUNCTION
		function debounce(func, wait, immediate) {
			let timeout;
			return function () {
				let context = this,
					args = arguments;
				let later = function () {
					timeout = null;
					if (!immediate) func.apply(context, args);
				};
				let callNow = immediate && !timeout;
				clearTimeout(timeout);
				timeout = setTimeout(later, wait);
				if (callNow) func.apply(context, args);
			};
		};
		// ADJUST SIZE OF MENU ON WINDOW RESIZE
		window.addEventListener('resize', function () {
			debounce(adjustSize());

		})
		// HANDLING CLICK ON HEAD
		activeHead.addEventListener("click", function (e) {
			let thisSelectIndex = this.getAttribute("data-select-index");
			let thisList = document.querySelector(".select__options[data-select-head=" + thisSelectIndex + "]");
			if (thisList.classList.contains("select__options--expanded")) {
				thisList.classList.remove("select__options--expanded")
				activeHead.removeAttribute("selected")
			} else {
				filterOptions();
				// PREVENT EVENT FROM BUBBLING
				e.stopPropagation();
				// CLOSING ALL OPEN LISTS
				let allLists = Array.from(document.querySelectorAll(".select__options"));
				allLists.forEach(function (list) {
					if (list.classList.contains("select__options--expanded")) {
						list.classList.remove("select__options--expanded")
						activeHead.removeAttribute("selected")
					}
				});
				// ADJUST THE POSITION AND SIZE OF LIST
				adjustSize()
				SelectOptionsList.classList.add("select__options--expanded")
				activeHead.setAttribute("selected", '')
				// RESET SEARCH VALUE AND MAKE IT FOCUSED
				if (mainContainer.querySelector(".select-searchbox")) {
					mainContainer.querySelector(".select-searchbox").focus();
					mainContainer.querySelector(".select-searchbox").value = "";
				}
			}
		});
		// HANDLING CLICK ON UL
		SelectOptionsList.addEventListener("click", function (e) {
			// FUNCTION TO CHECK IF THE ELEMENT HAVE DATA VALUE
			function findParentWithData(elem) {
				try {
					if (elem.getAttribute("data-value"))
						return elem;
				} catch (e) {
					return false;
				}
				while (!elem.getAttribute("data-value")) {
					return findParentWithData(elem.parentNode);
				}
			}
			let li = findParentWithData(e.target);
			if (li !== false) {
				let selectedValue = findParentWithData(e.target).textContent;
				// setTimeout(() => {
					SelectOptionsList.classList.remove("select__options--expanded");
					activeHead.removeAttribute("selected")
				// }, 250);
				SelectHead.textContent = selectedValue;
				selectElm.value = findParentWithData(e.target).getAttribute("data-value");
				// TRIGGER CHANGE EVENT ON SELECT ELEMENT
				let event = new Event("change");
				selectElm.dispatchEvent(event);
			}
		});
		// HANDLING CLICK ON Search
		let searchBoxes = Array.from(SelectOptionsList.querySelectorAll(".search-list"));
		searchBoxes.forEach(function (selectbox) {
			let search = selectbox.querySelector("input");
			selectbox.addEventListener("click", function (e) {
				e.stopPropagation();
			});
		});
	});
	// HANDLING CLICK OUTSIDE
	let allOptions = Array.from(document.querySelectorAll(".select__options"));
	let allControls = Array.from(document.querySelectorAll(".select__control"));

	document.addEventListener("click", function () {
		allOptions.forEach(function (option) {
			// setTimeout(() => {
				option.classList.remove("select__options--expanded");
				allControls.forEach(control => {
					control.removeAttribute("selected")
				});
			// }, 250);
		});
	});
};
document.addEventListener("DOMContentLoaded", () => {
	createSelects()
})

global.createSelects = createSelects;