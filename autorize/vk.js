const ID_SOTIAL =1;
module.exports = function (passport) {
    var VKStrategy = require('passport-vk-strategy').Strategy;
    var users = require('../db/users.db.js')();
    passport.use(new VKStrategy(
        {
            clientID:     6777129,
            clientSecret: 'F5kBtnCQTYFTOlEoPUv1',
            callbackURL:  "http://localhost:3000/auth/vk/callback"
        },
        function VerifyCallback(accessToken, refreshToken, params, profile, done) {
            var user = users.getUser(ID_SOTIAL, profile.id);
            if (user == null)
            {
                user = {
                    profileId:profile.id,
                    sotialId:ID_SOTIAL,
                    username: profile.displayName,
                    photoURL: profile.photos[0].value,
                }
                users.addUser(user);
            }
            return done(null, user);
        }
    ));

}