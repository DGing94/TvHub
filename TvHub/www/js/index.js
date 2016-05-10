/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var name = "Devin";

var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
        generateApp();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        console.log('Received Event: ' + id);
    }
};

var clock = {
    //Attributes for clock object will go here
};

function updateClock() {
    var now = new Date(), // current date
        months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']; // you get the idea
        time = now.getHours() + ':' + ((now.getMinutes()<10?'0':'') + now.getMinutes()); // again, you get the idea

        // a cleaner way than string concatenation
        date = [months[now.getMonth()],
                now.getDate(),                
                now.getFullYear()].join(' ');

    // set the content of the element with the ID time to the formatted string
    document.getElementById('currentTime').innerHTML = time;
    document.getElementById('currentDate').innerHTML = date;

    // call this function again in 1000ms
    setTimeout(updateClock, 1000);
};

function updateGreeting(){
    var now = new Date();
    var greeting = document.getElementById('greeting');

    if(now.getHours() <= 12){
        greeting.innerHTML = "Good morning " + name;
    }
    else if((now.getHours() > 12) && (now.getHours() <= 18)){
        greeting.innerHTML = "Good afternoon " + name;
    }
    else{
        greeting.innerHTML = "Good evening " + name;
    }
    setTimeout(updateGreeting, 3600000);
};

function restMode(){
    //This will remove everything from the screen except for the time and maybe the date. Then fade to black.
};

function showWeather(){
    var action = document.getElementById('actionContainer');
    action.innerHTML = "";

    //creating the elements to be put into the action container
    var icon = document.createElement("p");
    var temperature = document.createElement("p");
    var hilo = document.createElement("p");

    //populating the elements
    icon.innerHTML = "IT GON RAIN";
    temperature.innerHTML = "55";
    hilo.innerHTML = "75/35";

    //Adding elements to the action container
    action.appendChild(icon);
    action.appendChild(temperature);
    action.appendChild(hilo);
};

function generateApp(){
    /*
    //Creating basic elements
    var actionContainer = document.createElement("div");
    var time = document.createElement("p");
    var date = document.createElement("p");
    actionContainer.id = "actionContainer";
    time.id = "currentTime";
    date.id = "currentDate";

    //populating the application
    //var app = document.getElementByClass('app');
    document.app.appendChild(time);
    document.app.appendChild(actionContainer);
    document.app.appendChild(date);
    */
    updateClock();
    updateGreeting();
    //showWeather();
}