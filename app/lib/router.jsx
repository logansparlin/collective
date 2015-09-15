subs = new SubsManager();

FlowRouter.route('/', {
    action: function() {
        ReactLayout.render(App, {
            content: <Landing/>
        })
    }
})
