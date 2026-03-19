using System.Windows.Controls;

namespace SwiftlyApp.Views
{
    public partial class ConfigPage : Page
    {
        public ConfigPage()
        {
            InitializeComponent();
            DataContext = new ViewModels.ConfigViewModel();
        }
    }
}
