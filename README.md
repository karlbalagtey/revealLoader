# Reveal Loader ES6

Reveal elements on scroll

## Getting Started

This loader uses Waypoints. Adds class ".reveal-item" and ".reveal-item-is-visible".



### Installing


Install package from NPM
```
npm install reveal-loader
```

Then import the module in your project. For example:

```
import RevealLoader from 'reveal-loader';

RevealLoader.load('.selector', '95%');
```

"95%" is the Waypoint offset. 

Add this to your CSS/SASS/LESS

```
.reveal-item {
	opacity: 0;
	transition: all .6s ease-out;
	transform: translate(0, 10rem);

	&-is-visible {
		opacity: 1;
		transform: translate(0, 0);
	}
}
```

## Built With
* Javascript

## Authors

* **Karl Mark Balagtey** - *Initial work* - [4ksoftware](https://4ksoftware.io)

See also the list of [contributors](https://github.com/your/project/contributors) who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details

