const profile = {
	name: 'lol',
	surname: 'lss',
	comment: 0
}

const info = ({name, comment}) => {
	if(!comment){
		return `User ${name} no comment`
	}
	return `User ${name} has ${comment} comments`
}

console.log(info(profile))