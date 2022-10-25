interface Driver {
	database: string;
	password: string;
	port: string;

	connect(): void;
	disconnect(): void;
	isConnected(name: string): boolean;
}

class PostgresDriver implements Driver {

	database: string;
	password: string;
	port: string

	constructor({
		database,
		password,
		port
	}: Driver) {
		this.database = database;
		this.password = password;
		this.port = port;
	}
	
	disconnect(): void {
		//do Disconnect logic
	}
	isConnected(name: string): boolean {
		return name === 'Postgres';
	}

	connect(): void {
		//do Connect logic
	}

} 