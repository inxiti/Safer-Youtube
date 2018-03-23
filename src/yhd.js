@-moz-document domain("youtube.com") {
	/*
	UserScript to disable the description, and comments.

	The primary use case is to allow people to use youtube without worrying about what links
	they click on to prevent falling for: scams, trojans, viruses, untrusted sources, etc.
	*/

	#description {
	    pointer-events: none;
	    display: none;
	    visibility: hidden;
	}

	#comments {
	    pointer-events: none;
	    display: none;
	    visibility: hidden;
	}
}
