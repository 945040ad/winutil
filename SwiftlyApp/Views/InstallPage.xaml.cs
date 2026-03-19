using System.Windows.Controls;

namespace SwiftlyApp.Views
{
    public partial class InstallPage : Page
    {
        public InstallPage()
        {
            InitializeComponent();
            DataContext = new ViewModels.InstallViewModel();
        }
    }
}
