This Project is front end react code that interact with django api env 
TO DEPLOY 
1. clone this project to your env 
2. make sure you have nodejs installed in your env 
3. run "npm install" to install dependence modules 
4. run "npm run-script build" to build your app 
5. publib your app 
6. make sure you have apache installed ( or you can choose other ways to set up your env ) 
7. create a config file in sites-available eg sitename.com.conf
8. fill in with this content 


        ServerName sitename.com
        ServerAnpm run-script buildlias www.sitename.com
        ServerAdmin webmaster@sitename.com
        DocumentRoot yourbuilddirectory

        # Serve static files like the minified javascript from npm run-script build
        <Directory yourbuilddirectory>
                Options FollowSymLinks
                AllowOverride All
                Require all granted
        </Directory>




9. run "a2ensite sitename.com" to enable your site 
10. restart apache 
11. to test your site is ready, you can change your home computer hosts file to point to that env ip and verify that you can view your site 
12. publish to the world
13. change dns zone to point your domain name to the env ip 
14. set up CloudFront  for your website , this will cache the content and will push up a lot , however it will have issue when development, thus we could recommend to have development env 
15. you can also publish your site at cdn server but in this case it will not really usefull since the size of project is quite small 

FUNCTIONS 
1. BoatService
This is where you will find your dashboard of boats and order base on SwimLanes 
        1.1 you can move boat from one lane to another lane by dragging it 
        1.2 you can remove the boat (click to x button ) 
        1.3 you can add a new one from the top menu and by default boat will be at docked lane ( pk = 1 ) you can change the default value base on your need   
        1.4 the list will auto adjust base on your screensize thus mobile still will be able to see the whole list without any issue 
        1.5 in each boat card, it display the Boat Plate Number , Guide name and description of the service 
2. Boat 
        2.1 BoatList will show you list of all boat that available in the system 
        2.2. You can DELELTE/UPDATE/ADD a boat 
3. Guide
        3.1 GuideList will show you list of all guide that available in the system to service
        3.2. You can DELELTE/UPDATE/ADD a guide 
        3.3 later we can transfor guide table to user table with login cridential and user type is guide
4. SwimLanes
        4.1 SwimLanes will show you list of all swimlane that available in the system to service
        4.2 You can DELELTE/UPDATE/ADD a Lane, after that it will reflect in Boat Service Dashboard 

TODO
1. Permission User 
It is very import to limit access to each user ( eg: operator, guide ), however i was not able to finish it in this project 
2. More friendly design for Dashboard like guide icon , ability to change guide or make some note 
3. Chat service, this will be really helpfull for operator and guide to communicate 
4. Expecting Return date, i found that by knowing when the boat will back to Harbor will help operator have more control over boats service 
5. Delete / unDelete will be usefull to avoid ghost data in database 
