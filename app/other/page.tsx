
'use client';

import {FC, useEffect} from "react";

interface OtherInterface {
	first: number;
	second: string;
	third: Array<string>;
}

class Greeting {
	greeting: string;

	constructor(message: string) {
		this.greeting = message;
	}

	greet(): string {
		return this.greeting;
	}
}

export default function OtherPage() {
	function double(x: number): number {
		return 2 * x;
	}

	function construction(constructionFunction: { new(num: number) : any}): void {

	}

	// we can also have something to be of type class which is a very power feature.
	// why does the useEffect function always run 2 times.
	// runs 2 times on development mode but not on production mode.
	useEffect(() => {
		let greeting = new Greeting("Hello world");
		console.log(greeting.greeting);
	}, [])

	return (
		<div>
			<p>Hello world</p>
		</div>
	)
}