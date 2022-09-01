// Differences between enum {} and const enum {}

	enum CourseCategory {
		FRONTED,
		BACKEND,
	}

	export const courseCategory = CourseCategory.FRONTED;

	//--- Compilation ---

	/* 
		var CourseCategory;
		(	function (CourseCategory) {
				CourseCategory[CourseCategory["FRONTED"] = 0] = "FRONTED";
				CourseCategory[CourseCategory["BACKEND"] = 1] = "BACKEND";
		})(CourseCategory || (CourseCategory = {}));
		export const courseCategory = CourseCategory.FRONTED; 
	*/

	const enum CourseCategoryConst {
		FRONTED,
		BACKEND,
	}

	export const courseCategoryConst = CourseCategoryConst.FRONTED;

	//--- Compilation ---
	
	//export const courseCategoryConst = 0 /* CourseCategoryConst.FRONTED */;



/*  
	We can see there is  a difference in the compiled bundle, 
	with const ts will replace the exact value in anywhere the enum is used.
	In the other hand without const keyword it will create a function to assign values.
*/	