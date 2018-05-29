FROM node:10.2.1

WORKDIR /opt/CpQ/

COPY ./src/ ./src

COPY ./package.json .
COPY ./karma.conf.js .
COPY ./protractor.conf.js .
COPY ./tslint.json .
COPY ./tsconfig.json .
COPY ./.angular-cli.json .

COPY ./scripts/start.sh .

# RUN mkdir ~/.npm-global
# RUN npm config set prefix '~/.npm-global'
# RUN export PATH=~/.npm-global/bin:$PATH

RUN npm install

# RUN npm cache clean --force
# RUN npm uninstall -g angular-cli
# RUN npm install -g -f angular-cli

RUN npm install -g @angular/cli


CMD [ "./start.sh"]
