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
        updateClock();
        updateGreeting();
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

    if(now.getHours() <= 12){
        document.getElementById('greeting').innerHTML = "Good morning " + name;
    }
    else if((now.getHours() > 12) && (now.getHours() <= 18)){
        document.getElementById('greeting').innerHTML = "Good afternoon " + name;
    }
    else{
        document.getElementById('greeting').innerHTML = "Good evening " + name;
    }
    setTimeout(updateGreeting, 3600000);
};