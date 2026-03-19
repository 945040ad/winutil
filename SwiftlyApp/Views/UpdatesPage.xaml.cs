using System.Windows.Controls;

namespace SwiftlyApp.Views
{
    public partial class UpdatesPage : Page
    {
        public UpdatesPage()
        {
            InitializeComponent();
            DataContext = new ViewModels.UpdatesViewModel();
        }
    }
}
