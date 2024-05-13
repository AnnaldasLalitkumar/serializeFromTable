<div class="" style="margin-top:20px;">
<h3>1. Introduction:</h3>
<hr/>
<div class="row">
	Positive User experience is the key for any project to be successful and developers work extremely hard 
		to achieve this.
	HTML tables are created to provide a straightforward way to present or display data in a format or structure that can be easy for users to understand and digest.
	Displaying static data into a table is quite easy for developers. Now lets imagine we have a task to create 
	a structured tabular form with HTML Elements with dynamic adding editing or removing rows and submit the data entered by user to backend. 
	Sounds easy if you have a single row or fixed number of rows. But for dynamic number of rows its a real challenge.
	<br/>Serializing table to JSON can be a simple and smart solution to send data.<br/>
	When Exchanging data between a browser and a server, the data can only be text.	
	Since the JSON format is text only, it can easily be sent to and from a server, 
	and used as a data format by any programming language.
	SerializeFromTable is a light weight JQuery plugin used to serialize any table to JSON.
	
</div>
</div>
<div class=" hpanel">
<h3>2. Features:</h3>
<div class="row">
	<ul class="square-bullets">
		<li>Lightweight and minified(~2KB)</li>
		<li>Converts any HTML table to JSON</li>
		<li>Supports table with HTML Form elements</li>
		<li>Support content editable property</li>
		<li>Support output as JSON Array as well as JSON Object</li>		
		<li>Compatible with other plugins like select2js, Datatables, Datepicker etc.</li>
		<li>Allows custom name instead of displayed table column names</li>
		<li>Allows getting value by option value or description from dropdowns.</li>
		<li>Supports multiple select dropdown to fetch multiple selected values.</li>
	</ul>
	</div>
</div>
<br/>
<div class="row ">
<h3>3. Installation:</h3>
<hr>
<p>
	How to get this up and running?<br/> This plugin only requires JQuery as dependency to be placed in your html code as below.
	Add the below dependencies between &lt;head&gt; &lt;/head&gt;tag.<br/>
	<div class="col-md-12" style="background-color: black;border-radius:2px;margin:2%;padding:5px;">
		<code style="color:blanchedalmond">		
			&lt;script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"&gt;&lt;/script&gt;<br/>
			&lt;script src="js/serializeFromTable-min.js"&gt;&lt;/script&gt;			
		</code>	
	</div>
</p>
	<p>Convert HTML table to JSON Data as below:<br/>
	<div class="col-md-12" style="background-color: black;border-radius:2px;margin:2%;padding:5px;">
	<code style="color:blanchedalmond;">
		$(document).ready(function(){
			<br/>let tableData = $("#myTable").serializeFromTable();
			<br/>console.log(tableData);<br/>
		});
	</code>
	</div>
</p>
</div>

<div class="">
<h3>4. Options:</h3>
<hr/>
<div class="row">
<ul>
	<li><b>columnNameBy</b>:&lt;String&gt; Can be used for custom key in json. 
		<div class="col-md-12" style="background-color: black;border-radius:2px;margin:2%;padding:5px;">
			<code style="color:blanchedalmond;">
				$(document).ready(function(){
					<br/>let tableData = $("#myTable").serializeFromTable({<br/>
						columnNameBy:"data-columnTitle"       //can pass any data-* attribute in &lt;th&gt; tag<br/>
					});<br/>
					console.log(tableData);<br/>
				});
			</code>
		</div>			
	</li>
	<li><b>displayCount</b>:&lt;boolean&gt; Can be used to get total number of rows. 
		<div class="col-md-12" style="background-color: black;border-radius:2px;margin:2%;padding:5px;">
			<code style="color:blanchedalmond;">
				$(document).ready(function(){
					<br/>let tableData = $("#myTable").serializeFromTable({<br/>
						displayCount:true //use with dataType option as object<br/>
					});<br/>
					console.log(tableData);<br/>
				});
			</code>
		</div>			
	</li>
	<li><b>dataType</b>: &lt;String&gt; Can be used to get response as JSON Object. 
		<div class="col-md-12" style="background-color: black;border-radius:2px;margin:2%;padding:5px;">
			<code style="color:blanchedalmond;">
				$(document).ready(function(){
					<br/>let tableData = $("#myTable").serializeFromTable({<br/>
						dataType:"object" //default value is "array"<br/>
					});<br/>
					console.log(tableData);<br/>
				});
			</code>
		</div>			
	</li>
	<li><b>hideColumns</b>: &lt;String[]&gt;Can be used ignore table columns while converting to JSON.Index no starts with 0.
		<div class="col-md-12" style="background-color: black;border-radius:2px;margin:2%;padding:5px;">
			<code style="color:blanchedalmond;">
				$(document).ready(function(){
					<br/>let tableData = $("#myTable").serializeFromTable({<br/>
						hideColumns:["0","1"] //String comma seperated array.<br/>
					});<br/>
					console.log(tableData);<br/>
				});
			</code>
		</div>			
	</li>
	<li><b>getValueByDesc</b>: &lt;boolean&gt;Can be used to get text value in json from dropdowns.
		<div class="col-md-12" style="background-color: black;border-radius:2px;margin:2%;padding:5px;">
			<code style="color:blanchedalmond;">
				$(document).ready(function(){
					<br/>let tableData = $("#myTable").serializeFromTable({<br/>
						getValueByDesc:true //get description instead of value from &lt;option&gt; tag.<br/>
					});<br/>
					console.log(tableData);<br/>
				});
			</code>
		</div>			
	</li>
</ul>
</div>
</div>
<div class="">
<h3>5. See it:</h3>
<hr/>
<p>There are two sections on Demo page. First past shows conversion of a normal table to JSON while
the second part shows conversion of table with HTML form elements.

<br/>
<a href="Demo.html" class="btn btn-success">Demo</a>
</p>
</div>

</div>
<footer class="jumbotron text-center">
	For any queries or requirements feel free to connect to me at:
	<br/>
	lalitkumar.annaldas@gmail.com<br/>
	You can even connect me at: <b><a target="_blank" href="http://www.linkedin.com/in/lalitkumar-annaldas-48a284148">LinkedIn</a></b>
	<p class="copyright">
		SerializeFromTable &copy; <a target="_blank" href="https://github.com/AnnaldasLalitkumar">Lalitkumar Naresh Annaldas</a> 2024.
		Released under the <a target="_blank" href="https://github.com/AnnaldasLalitkumar/serializeFromTable/blob/master/LICENSE">MIT license</a>.
	</p>
</footer>
</body>
</html>
